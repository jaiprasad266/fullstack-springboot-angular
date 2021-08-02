package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * {@link ProductCategory} - Entity
 * Long - Primary Key
 * "productCategory" - Name of JSON entry
 * "product-category" - /product-category
 */

@RepositoryRestResource(collectionResourceRel = "productCategory" , path = "product-category")
public interface ProductCategoryRepository extends JpaRepository<ProductCategory,Long> {
}
