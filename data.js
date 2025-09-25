const nama = `rifky ramadhan`;
let usia = 20; 

let biodata = document.getElementById("biodata")

  function generateBiodata() {
    let generasi;
    if (usia == 20) { console.log(`anda dewasa`); 
    generasi = "generasi remaja"
    } 
    else if(usia > 17 && usia < 20) { console.log(`anda remaja`) 
    generasi = "generasi ini bocah sad"
    }
    else { console.log(`anda anak kecil`);
    generasi = "generasi ini bocil"
    }  
    console.log(`nama saya adalah ${nama} dan usia saya adalah ${usia}, saya termasuk ke dalam generasi ${generasi}`);
    return biodata.innerHTML = generasi
  }
    console.log(nama);
    console.log(usia);

    generateBiodata();