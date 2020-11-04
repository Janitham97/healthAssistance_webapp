package healthassistance.webapp.Repository;

import healthassistance.webapp.Model.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface DoctorRepository extends MongoRepository<Doctor,String> {

   public Doctor findByNic(String nic);
}
