export let formulario = ()=>{
    let html = 
    `
    <form name="form1">
                <ul>
                    <li>
                        <label for="name" class=" form-label">NOMBRE: </label>
                        <input type="text" id="name" name="nombre_alumno" class="form-control" value="" autofocus >

                        <label for="last" class="form-label">APELLIDO: </label>
                        <input type="text" id="last" name="apellido_alumno" class="form-control" value="" >    

                        <label for="dni" class="form-label">DNI: </label>
                        <input type="text" id="dni" name="dni_alumno" value="" class="form-control">

                        <label for="imgs" class="form-label">IMG: </label>
                        <input type="file" id="imgs" name="img_alumno" class="form-control">
                    </li>
                    <li>
                        <label for="notas" class="mt-2">NOTAS: </label>
                        <ul class="linea">
                            <li>
                                <label for="m1" class="form-label">MODULO 1: </label>
                                <input type="number" id="m1" name="alumno_m1" value="0" class="form-control">
                            </li>
                            <li>
                                <label for="m2" class="form-label">MODULO 2: </label>
                                <input type="number" id="m2" name="alumno_m2" value="0" class="form-control">
                            </li>
                            <li>
                                <label for="m3" class="form-label">MODULO 3: </label>
                                <input type="number" id="m3" name="alumno_m3" value="0" class="form-control">
                            </li>
                        </ul>

                    </li>
                </ul>
            </form>
    `
            return html
} 