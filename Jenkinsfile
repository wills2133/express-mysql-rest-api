def label = "test-${UUID.randomUUID().toString()}"

podTemplate(label: label, yaml: """
apiVersion: v1
kind: Pod
metadata:
  labels:
    jenkins: slave
spec:
  imagePullSecrets:
  - name: nexus-pull
  containers:
  - name: jnlp
    image: registry.ntpstat.com:2222/jenkins/jnlp-slave:3.10-1-alpine
    args:
    - \$(JENKINS_SECRET)
    - \$(JENKINS_NAME)
"""
) {
    node(label) {
        stage('test') {
            echo "test"
        }
    }
}
