package com.yaudim.barzilai.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.yaudim.barzilai.entities.Sale;

/*Repositories sao componentes para gravar no banco de dados*/
public interface SaleRepository extends JpaRepository<Sale, Long>{

}
