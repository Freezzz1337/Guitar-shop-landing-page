package backend.repository;

import backend.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuitarOrderRepository extends JpaRepository <Order, Integer> {
}
