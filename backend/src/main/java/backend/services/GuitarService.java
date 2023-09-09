package backend.services;

import backend.repository.GuitarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class GuitarService {
    private final GuitarRepository guitarRepository;

    @Autowired
    public GuitarService(GuitarRepository guitarRepository) {
        this.guitarRepository = guitarRepository;
    }
}
