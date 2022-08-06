package com.yannfigueiredo.metavendas.controllers;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yannfigueiredo.metavendas.dto.SaleDTO;
import com.yannfigueiredo.metavendas.services.SaleService;
import com.yannfigueiredo.metavendas.services.SmsService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	@Autowired
	SaleService service;
	
	@Autowired
	private SmsService smsService;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(
			@RequestParam(value = "min", defaultValue="") String min,
			@RequestParam(value = "max", defaultValue="") String max,
			@RequestParam(value = "page", defaultValue="0") Integer page
			) {
		
		LocalDate minDate = min.equals("") ? null : LocalDate.parse(min);
		LocalDate maxDate = max.equals("") ? null : LocalDate.parse(max);
		
		PageRequest pageRequest = PageRequest.of(page, 20, Direction.valueOf("DESC"), "date");
		
		Page<SaleDTO> list = service.findByDates(minDate, maxDate, pageRequest);
		
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping("/{id}/notification")
	public void notifySms(@PathVariable Long id) {
		smsService.sendSms(id);
	}
}
