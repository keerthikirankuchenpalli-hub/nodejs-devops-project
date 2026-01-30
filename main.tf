resource "aws_security_group" "node_sg" {
  name        = "nodejs-sg"
  description = "Allow SSH and HTTP"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "nodejs-sg"
  }
}

resource "aws_instance" "node_app" {
  ami           = "ami-073130f74f5ffb161"
  instance_type = "t3.micro"
  key_name      = "nodejs-prod-key"

  vpc_security_group_ids = [aws_security_group.node_sg.id]

  tags = {
    Name = "node_app"
  }
}

