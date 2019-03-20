FROM ruby:2.5
RUN apt-get update
RUN apt-get -y install curl git apt-transport-https build-essential
RUN curl -sL https://deb.nodesource.com/setup_10.x
RUN apt-get install -y nodejs mysql-client
RUN mkdir /rails_app
WORKDIR /rails_app/
COPY ./sample/ /rails_app/
WORKDIR /rails_app/sample/
RUN bundle install
CMD ["/bin/bash"]
