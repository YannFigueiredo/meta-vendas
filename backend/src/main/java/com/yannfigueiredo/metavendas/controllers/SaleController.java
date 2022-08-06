package com.yannfigueiredo.metavendas.controllers;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yannfigueiredo.metavendas.dto.SaleDTO;
import com.yannfigueiredo.metavendas.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	@Autowired
	SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(
			@RequestParam(value = "min", defaultValue="") String min,
			@RequestParam(value = "max", defaultValue="") String max,
			@RequestParam(value = "page", defaultValue="0") Integer page
			) {
		
		LocalDate minDate = ("".equals(min)) ? null : LocalDate.parse(min);
		LocalDate maxDate = ("".equals(max)) ? null : LocalDate.parse(max);
		
		PageRequest pageRequest = PageRequest.of(page, 20, Direction.valueOf("DESC"), "date");
		
		Page<SaleDTO> list = service.findByDates(minDate, maxDate, pageRequest);
		
		return ResponseEntity.ok().body(list);
	}
}
