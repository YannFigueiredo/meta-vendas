package com.yannfigueiredo.metavendas.services;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.yannfigueiredo.metavendas.dto.SaleDTO;
import com.yannfigueiredo.metavendas.repositories.SaleRepository;

@Service
public class SaleService {
	@Autowired
	private SaleRepository saleRepo;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findByDates(LocalDate minDate, LocalDate maxDate, PageRequest pageRequest) {
		return saleRepo.findByDates(minDate, maxDate, pageRequest).map(x -> new SaleDTO(x));
	}
}
