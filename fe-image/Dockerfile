# (C) Copyright IBM Corp. 2019
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

FROM tiangolo/uwsgi-nginx-flask:python3.6

ENV LISTEN_PORT 9080
EXPOSE 9080

COPY ./requirements.txt /tmp/requirements.txt
RUN pip install -U pip
RUN pip install -r /tmp/requirements.txt

RUN pip install tensorflow==1.12.0

RUN PYTHONPATH=.:$PYTHONPATH
RUN export PYTHONPATH

# Install OpenJDK
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get clean;

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME

# Install git with lfs
#RUN apt-get install -y git &&\
#	curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash &&\
#	apt-get -y install git-lfs &&\
#	mkdir temp &&\
#	git clone https://github.com/elastest/elastest-recommendation-engine-trial.git temp &&\
#	cp -r temp/fe-image/server/* /app/ &&\
#	cp temp/fe-image/server/static/favicon-16x16.png /usr/local/lib/python3.6/site-packages/flask_restplus/static/favicon-16x16.png &&\
#	cp temp/fe-image/server/static/favicon-32x32.png /usr/local/lib/python3.6/site-packages/flask_restplus/static/favicon-16x16.png &&\
#	rm -rf temp
# finish lfs 

COPY ./server /app
COPY ./server/static/favicon-16x16.png /usr/local/lib/python3.6/site-packages/flask_restplus/static/favicon-16x16.png
COPY ./server/static/favicon-32x32.png /usr/local/lib/python3.6/site-packages/flask_restplus/static/favicon-32x32.png
