package com.yannfigueiredo.metavendas.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.yannfigueiredo.metavendas.entities.Sale;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long> {
	@Query("SELECT obj FROM Sale obj WHERE "
			+ "(:minDate IS NULL OR obj.date >= :minDate) AND "
			+ "(:maxDate IS NULL OR obj.date <= :maxDate)")
	
	Page<Sale> findByDates(LocalDate minDate, LocalDate maxDate, Pageable pageable);
}
