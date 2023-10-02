package backend.controllers;

import backend.dto.OrderDTO;
import backend.models.Order;
import backend.services.GuitarOrderService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderController {

    private final ModelMapper modelMapper;
    private final GuitarOrderService guitarOrderService;

    @Autowired
    public OrderController(ModelMapper modelMapper, GuitarOrderService guitarOrderService) {
        this.modelMapper = modelMapper;
        this.guitarOrderService = guitarOrderService;
    }

    @PostMapping
    public ResponseEntity<String> postOrder(OrderDTO orderDTO){
        guitarOrderService.save(convertToOrder(orderDTO));
        return ResponseEntity.ok("OK!");
    }

    private Order convertToOrder(OrderDTO orderDTO) {
        return modelMapper.map(orderDTO, Order.class);
    }
}
