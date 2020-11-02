package healthassistance.webapp.Controller;

import healthassistance.webapp.Model.Patient;
import healthassistance.webapp.Repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PatientController {

    @Autowired
    private PatientRepository patientRepository;  //inject repository

    //save a new patient
    @PostMapping("/addPatient")
    public String savePatient(@RequestBody Patient patient){
        patientRepository.save(patient);
        return "Add a Patient with id"+ patient.getId();
    }

    //get all patients method
    @GetMapping("/findAllPatients")
    public List<Patient> getPatient(){
        return patientRepository.findAll();
    }

    //get patient by id
    @GetMapping("/findPatientByid/{id}")
    public Optional<Patient> getPatient(@PathVariable String id){
        return patientRepository.findById(id);
    }

    //delete patient
    @DeleteMapping("/delete/{id}")
    public String deletePatient(@PathVariable String id){
        patientRepository.deleteById(id);
        return "Patient deleted with id";
    }
}
