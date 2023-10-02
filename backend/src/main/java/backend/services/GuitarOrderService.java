package backend.services;

import backend.models.Order;
import backend.repository.GuitarOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class GuitarOrderService {

    private final GuitarOrderRepository gor;

    @Autowired
    public GuitarOrderService(GuitarOrderRepository gor) {
        this.gor = gor;
    }

    @Transactional
    public void save(Order newOrder){
        gor.save(newOrder);
    }
}
