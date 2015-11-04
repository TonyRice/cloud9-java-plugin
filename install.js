define(function(require, exports, module) {
    
module.exports = function(session, options){

    session.install({
        "name": "Oracle Java 8 Installer",
        "description": "Installs Java 8 from Oracle",
        "cwd": "~/.c9"
    },
    [
        {
            "bash": 'sudo add-apt-repository ppa:webupd8team/java -y'
        },
         {
            "bash": 'sudo apt-get -y update'
        },
        {
            "bash" :'sudo echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections'
        },
         {
            "bash": 'sudo apt-get -y install oracle-java8-installer'
        }
    ]);
        
    session.install({
        "name": "Maven Installer",
        "description": "Installs the latest maven version for Ubuntu",
        "cwd": "~/.c9",
        "optional": true
    },
    [
        {
            "bash": 'sudo apt-get -y remove maven2'
        },{
            "ubuntu": 'maven'
        }
    ]);
    // Show the installation screen
    session.start();
};

module.exports.version = 1;

});