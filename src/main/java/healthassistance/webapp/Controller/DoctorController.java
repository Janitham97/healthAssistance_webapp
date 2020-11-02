package healthassistance.webapp.Controller;

import healthassistance.webapp.Model.Doctor;
import healthassistance.webapp.Repository.DoctorRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class DoctorController {

    private DoctorRepository doctorRepository;

    //save a new doctor
    @PostMapping("/addDoctor")
    public String saveDoctor(Doctor doctor){
        doctorRepository.save(doctor);
        return "Doctor details saved, id:"+doctor.getId();
    }

    //get all doctors
    @GetMapping("/getAllDoctors")
    public List<Doctor> getDoctors(){
        return doctorRepository.findAll();
    }

    //get doctor by id
    @GetMapping("/getDoctorByid/{id}")
    public Optional<Doctor> getDoctors(@PathVariable String id){
        return doctorRepository.findById(id);
    }

    //delete doc by id
    @DeleteMapping("/delete/{id}")
    public String deleteDoctor(@PathVariable String id){
        doctorRepository.deleteById(id);
        return "Doctor details deleted";
    }
}
