package healthassistance.webapp.Repository;

import healthassistance.webapp.Model.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface DoctorRepository extends MongoRepository<Doctor,String> {


   //those repository actions not shown by default because of that created below
   public Doctor findByNic(String nic);
   public  Doctor findByNicAndPassword(String nic, String password);
}
