package com.yannfigueiredo.metavendas.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.yannfigueiredo.metavendas.entities.Sale;

public class SaleDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private LocalDate date;
	private String seller;
	private Integer visits;
	private Integer sales;
	private Double total;
	
	public SaleDTO() {}
	
	public SaleDTO(Sale entity) {
		this.id = entity.getId();
		this.date = entity.getDate();
		this.seller = entity.getSeller();
		this.visits = entity.getVisits();
		this.sales = entity.getSales();
		this.total = entity.getTotal();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public String getSeller() {
		return seller;
	}

	public void setSeller(String seller) {
		this.seller = seller;
	}

	public Integer getVisits() {
		return visits;
	}

	public void setVisits(Integer visits) {
		this.visits = visits;
	}

	public Integer getSales() {
		return sales;
	}

	public void setSales(Integer sales) {
		this.sales = sales;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}
}
