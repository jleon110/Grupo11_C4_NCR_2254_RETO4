export default function Login2(){

    return (
        <div class="container">
            <div class="row"></div>
            <div class="col black">
                <div class="text-end">
                    <img src="alt=" />
                </div>
                <h2 class="fw-bold text-center py-4">Bienvenidos</h2>
                <from>
                    <div class="mb-4">
                        <label for="exampleInputEmail1" class="form-label">Ingrese su Correo</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                    </div>
                    <div class="mb-4">
                        <label for="exampleInputPassword1" class="form-label">Ingrese su Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-4 from-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1">Recordar Contraseña</label>
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                    </div>
                    <div class="my-4">
                        <span>¿No tienes una cuenta?<a href="#">Registrate Aquí</a></span><br/>
                        <span><a href="#">Recuperar Contraseña</a></span>
                    </div>
                </from>
            </div>
            <div class="col"></div>
        </div>      

    )
}