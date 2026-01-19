import request from '../../../utils/request';

// 养护计划相关API
export function listHeader(params) {
  return request({
    url: '/maintenance-plan/list',
    method: 'get',
    params
  });
}

export function generatePlan(data) {
  // 构建URL查询参数
  const params = new URLSearchParams();
  params.append('planDate', data.planDate);
  params.append('hospitalName', data.hospitalName);
  params.append('isKeyMedicine', data.isKeyMedicine);
  
  return request({
    url: '/maintenance-plan/generate',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: params.toString()
  });
}

export function getPlanDetail(id) {
  return request({
    url: `/maintenance-plan/${id}`,
    method: 'get'
  });
}

export function deletePlan(id) {
  return request({
    url: `/maintenance-plan/delete/${id}`,
    method: 'delete'
  });
}