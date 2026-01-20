// Firebase配置文件
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, off, remove } from 'firebase/database';

// Firebase配置信息
// 从环境变量中获取配置
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

// 初始化Firebase应用
const app = initializeApp(firebaseConfig);

// 获取实时数据库引用
const database = getDatabase(app);

// 模拟Supabase API的Firebase封装
const firebaseService = {
  // 加载数据
  from(table) {
    return {
      select() {
        return {
          async order(orderBy, { ascending }) {
            const tableRef = ref(database, table);
            return new Promise((resolve) => {
              onValue(tableRef, (snapshot) => {
                const data = snapshot.val();
                const result = data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : [];
                
                // 排序
                if (orderBy && result.length > 0) {
                  result.sort((a, b) => {
                    const aVal = a[orderBy];
                    const bVal = b[orderBy];
                    if (ascending) {
                      return aVal > bVal ? 1 : -1;
                    } else {
                      return aVal < bVal ? 1 : -1;
                    }
                  });
                }
                
                resolve({ data: result, error: null });
              }, { onlyOnce: true });
            });
          }
        };
      },
      
      // 插入数据
      async insert(data) {
        try {
          const tableRef = ref(database, table);
          const newItemRef = push(tableRef, {
            ...data,
            created_at: new Date().toISOString()
          });
          return { error: null };
        } catch (error) {
          return { error };
        }
      }
    };
  },
  
  // 订阅实时更新
  channel(channelName) {
    return {
      on(eventType, { table }, callback) {
        if (eventType === 'postgres_changes') {
          const tableRef = ref(database, table);
          onValue(tableRef, (snapshot) => {
            callback({
              table,
              eventType: 'INSERT'
            });
          });
        }
        return this;
      },
      
      subscribe() {
        return this;
      }
    };
  },
  
  // 移除频道订阅
  removeChannel(channel) {
    // Firebase自动管理订阅，这里不需要额外操作
  }
};

export default firebaseService;