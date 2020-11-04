package healthassistance.webapp.Service;

import healthassistance.webapp.Model.Doctor;
import healthassistance.webapp.Model.Patient;
import healthassistance.webapp.Repository.DoctorRepository;
import healthassistance.webapp.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private PatientRepository patientRepository;


    //find a doctor by NIC
    public Doctor fetchByNIC(String NIC){
        return doctorRepository.findByNIC(NIC);
    }

    //find a patient by NIC
    public Patient fetchBYNIC(String NIC){
        return patientRepository.findByNIC(NIC);
    }

}
