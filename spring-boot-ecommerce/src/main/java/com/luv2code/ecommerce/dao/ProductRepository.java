package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * {@link Product} - Entity
 * Long - Primary Key
 */
public interface ProductRepository extends JpaRepository<Product,Long> {
}
