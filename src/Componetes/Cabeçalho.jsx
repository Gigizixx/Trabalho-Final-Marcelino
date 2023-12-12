export default function Cabeçalho () {
    return (
        <div>
            <nav className="custom-navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Músicas Sertanejas</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="" data-bs-target="#navbarNavAltMusic" aria-controls="navbarNavAltMusic" aria-expanded="false" aria-label="">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMusic">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="" href="/">Home</a>
                            <a className="nav-link" href="Destaque">Em Destaque</a>
                            <a className="nav-link" href="Video">Video</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}