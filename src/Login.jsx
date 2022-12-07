export default function Login(){

    return (
        <div class="row justify-content-center">
            <div class="col-xl-15 col-lg-12">
                <div class="card o-hidden border-1 shadow-lg my-5">
                    <div class="card-body p-2">
                            
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block ">
                                <img src="https://www.tramaco.com.ec/wp-content/uploads/2021/09/imagen-camion.png" class="img-fluid" alt="Responsive image" /></div>
                            <div class="col-lg-6">
                                <div class="p-4">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">InstaYA Grupo 11</h1>
                                    </div>

                                        {/* <!--Formulario de Login--> */}
                                    <form class="user" action="index.html" method="POST">
                                        <div class="form-group mb-3">
                                            <input type="email" class="form-control form-control-user" name="usuario" aria-describedby="emailHelp" placeholder="User"/>
                                        </div>
                                        <div class="form-group mb-3">
                                            <input type="password" class="form-control form-control-user" id="exampleInputPassword" name="passw" placeholder="Password"/>
                                        </div>                                        
                                        <div class="form-group mb-3">
                                        <div class="col-lg-2 custom-control custom-checkbox small">
                                            <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                            <label class="custom-control-label" for="customCheck"> Remember</label>
                                        </div>
                                        </div>
                                        <button class="btn btn-outline-primary btn-block" id="alertas" type="submit">Send</button>
                        
                        
                                               
                                    </form>
                                            
                                            
                                    <div class="text-center">
                                    <a class="small" href="#">Forgot your password?</a>
                                    </div>
                                            
                                    <hr/>
                                        <div class="text-center">
                                        <a class="btn btn-outline-primary" href="{{url_for('registro')}}">User Register</a>
                                        </div>
                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">&copy; Grupo 11</div>
                            <div>
                                <a href="#">Aplica</a>
                                &middot;
                                <a href="#">T y C</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
    
        </div>
    
    /* </div> */
  


    )
}