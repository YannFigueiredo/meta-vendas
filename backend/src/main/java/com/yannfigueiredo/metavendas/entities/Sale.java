package com.yannfigueiredo.metavendas.entities;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tab_sales")
public class Sale {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate date;
	private String seller;
	private Integer visits;
	private Integer sales;
	private Double total;
	
	public Sale() {};
	
	public Sale(Long id, LocalDate date, String seller, Integer visits, Integer sales, Double total) {
		super();
		this.id = id;
		this.date = date;
		this.seller = seller;
		this.visits = visits;
		this.sales = sales;
		this.total = total;
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

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Sale other = (Sale) obj;
		return Objects.equals(id, other.id);
	}
}
