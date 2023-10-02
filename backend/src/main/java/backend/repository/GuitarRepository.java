package backend.repository;

import backend.models.Guitar;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GuitarRepository extends JpaRepository<Guitar, Integer>{
    //    ----------------------To add new picture---------------------
//    public List<Guitar> findAll();
    public List<Guitar> findGuitarByType(String type);
}