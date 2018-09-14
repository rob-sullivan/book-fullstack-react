class ProjectDashboard extends React.Component {
    state = {
        projects: [],
    };

    componentDidMount() {
        this.setState({ projects: Seed.projects});
    }

    render() {
        const projects = this.state.projects.sort((a, b) => (
            b.votes - a.votes
        ));

        const projectComponents = projects.map((project) => (
            <div className="row">
                <Project
                    key={'project-' + project.id}
                    id={project.id}
                    title={project.title}
                />
                <div className="ui divider"></div>
            </div>
        ));
        if (this.props.isOpen) {
            return (
                <div className="ui one row doubling stackable grid container">
                    <div className="row">
                        <Project
                            key="p1"
                            id="1"
                            title="Shattered Reality"
                        />
                     </div>
                </div>
            );
        }
        else {
            return (
                <div className="ui one row doubling stackable grid container">
                    {projectComponents}
                </div>
            );
        }
    }
}

class Project extends React.Component {
    render() {
        return (
            <div className="ui fluid card">
                <div className="ui nine column grid container">
                    <div className="center aligned middle aligned column">
                        {this.props.id}
                    </div>
                    <div className="center aligned middle aligned column">
                        {this.props.title}                        
                    </div>
                    <div className="center aligned middle aligned column">
                        <button class="ui icon button">
                            <i class="folder outline icon"></i>
                        </button>
                    </div>
                    <div className="center aligned middle aligned column">
                        <button class="ui icon button">
                            <i class="file alternate outline icon"></i>
                        </button>
                    </div>
                    <div className="center aligned middle aligned column">
                        <button class="ui icon button">
                            <i class="sitemap icon"></i>
                        </button>
                    </div>
                    <div className="center aligned middle aligned column">
                        <button class="ui icon button">
                            <i class="list alternate outline icon"></i>
                        </button>
                    </div>
                    <div className="center aligned middle aligned column">
                        <button class="ui icon button">
                            <i class="columns icon"></i>
                        </button>
                    </div>
                    <div className="center aligned middle aligned column">
                        <button class="ui icon button">
                            <i class="users icon"></i>
                        </button>
                    </div>
                    <div className="center aligned middle aligned column">
                        <button class="ui icon button">
                            <i class="chat icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <ProjectDashboard isOpen={false}/>,
    document.getElementById('content')
);