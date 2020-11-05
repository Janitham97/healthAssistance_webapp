package healthassistance.webapp.Repository;

import healthassistance.webapp.Model.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepository extends MongoRepository<Patient,String> {

    Patient findByNic(String NIC);
    Patient findByNicAndPassword(String nic, String password);
}
