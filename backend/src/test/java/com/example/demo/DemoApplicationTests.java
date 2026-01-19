package com.example.demo;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@SpringBootTest
class DemoApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void generateBase64Data() {
		try {
			// 构建发票主数据
			Map<String, Object> invoiceMain = new HashMap<>();
			
			// 单据号·使用订单号
			invoiceMain.put("XTLSH", "SO123456");
			// 客户名称
			invoiceMain.put("KHMC", "安徽科技有限公司");
			// 发票种类
			invoiceMain.put("FPZL", "021");

			// 构建发票明细
			List<Map<String, Object>> invoiceLines = new ArrayList<>();
			
			// 模拟一条发票明细
			Map<String, Object> invoiceLine = new HashMap<>();
			invoiceLine.put("CPMC", "蜜远志"); // 产品名称
			invoiceLine.put("HSJE", 0.2); // 含税金额
			invoiceLine.put("SL", "0.09"); // 税率·固定值
			invoiceLine.put("FLBM", "1070303010000000000"); // 分类编码·固定值
			invoiceLine.put("CPDW", "个"); // 单位
			invoiceLine.put("CPSL", 1); // 数量
			invoiceLine.put("CPXH", "规格1"); // 规格
			
			invoiceLines.add(invoiceLine);
			
			// 将发票明细列表添加到发票主数据中，使用API要求的ITEM节点
			invoiceMain.put("ITEM", invoiceLines);
			
			// 税号
			invoiceMain.put("KHSH", "123456789012345");

			// 将发票主数据转换为JSON字符串
			String invoiceJson = new ObjectMapper().writeValueAsString(invoiceMain);
			System.out.println("发票JSON: " + invoiceJson);

			// 将发票JSON转换为base64编码
			String base64Data = Base64.getEncoder().encodeToString(invoiceJson.getBytes());
			System.out.println("Base64编码: " + base64Data);
			
			// 验证解码
			base64Data="eyJLSE1DIjoi6YOR5Lic5b2T5Luj55qu6IKk56eR6K+K5omAIiwiSVRFTSI6W3siRkxCTSI6IjEwNzAzMDMwMTAwMDAwMDAwMDAiLCJDUFhIIjoiNWcv6KKLIiwiSFNKRSI6NjM5NiwiU0wiOjAuMDksIkNQU0wiOjM5LCJDUE1DIjoi54Ku5bGx55SyIiwiQ1BEVyI6IuiiiyJ9LHsiRkxCTSI6IjEwNzAzMDMwMTAwMDAwMDAwMDAiLCJDUFhIIjoiNWcv6KKLIiwiSFNKRSI6MTY0LCJTTCI6MC4wOSwiQ1BTTCI6MSwiQ1BNQyI6IueCruWxseeUsiIsIkNQRFciOiLooosifV0sIktIU0giOiIiLCJYVExTSCI6IlhTR1RLWjAwMDIwMzA2IiwiRlBaTCI6IjAyMSJ9";
			byte[] decodedBytes = Base64.getDecoder().decode(base64Data);
			String decodedJson = new String(decodedBytes);
			System.out.println("解码后JSON: " + decodedJson);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Test
	void generateRedInvoiceBase64Data() {
		try {
			// 构建红冲发票主数据
			Map<String, Object> invoiceMain = new HashMap<>();
			
			// 单据号·使用订单号
			invoiceMain.put("XTLSH", "SO123456");
			// 客户名称
			invoiceMain.put("KHMC", "安徽科技有限公司");
			// 发票种类
			invoiceMain.put("FPZL", "021");
			// 原发票编号（红冲需要）
			invoiceMain.put("YFPHM", "26442000000243233626");

			// 构建红冲发票明细
			List<Map<String, Object>> invoiceLines = new ArrayList<>();
			
			// 模拟一条红冲发票明细
			Map<String, Object> invoiceLine = new HashMap<>();
			invoiceLine.put("CPMC", "蜜远志"); // 产品名称
			// 红冲：含税金额为负数
			invoiceLine.put("HSJE", -0.2); // 含税金额（负数）
			invoiceLine.put("SL", "0.09"); // 税率·固定值
			invoiceLine.put("FLBM", "1070303010000000000"); // 分类编码·固定值
			invoiceLine.put("CPDW", "个"); // 单位
			// 红冲：数量为负数
			invoiceLine.put("CPSL", -1); // 数量（负数）
			// 红冲：金额为负数
			invoiceLine.put("ZDYHSJJ", -0.2); // 金额（负数）
			invoiceLine.put("CPXH", "规格1"); // 规格
			
			invoiceLines.add(invoiceLine);
			
			// 将发票明细列表添加到发票主数据中，使用API要求的ITEM节点
			invoiceMain.put("ITEM", invoiceLines);
			
			// 税号
			invoiceMain.put("KHSH", "123456789012345");

			// 将发票主数据转换为JSON字符串
			String invoiceJson = new ObjectMapper().writeValueAsString(invoiceMain);
			System.out.println("红冲发票JSON: " + invoiceJson);

			// 将发票JSON转换为base64编码
			String base64Data = Base64.getEncoder().encodeToString(invoiceJson.getBytes());
			System.out.println("红冲Base64编码: " + base64Data);
			
			// 验证解码
			byte[] decodedBytes = Base64.getDecoder().decode(base64Data);
			String decodedJson = new String(decodedBytes);
			System.out.println("红冲解码后JSON: " + decodedJson);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}