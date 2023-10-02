package backend.services;

import backend.models.WriteUs;
import backend.repository.WriteUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional(readOnly = true)
public class WriteUsService {
    private final WriteUsRepository writeUsRepository;

    @Autowired
    public WriteUsService(WriteUsRepository writeUsRepository) {
        this.writeUsRepository = writeUsRepository;
    }

    @Transactional
    public void save(WriteUs writeUs){
        writeUsRepository.save(writeUs);
    }
}
