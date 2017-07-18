FROM nginx:1.11.7

RUN apt-get update \
	&& apt-get install curl -y

RUN rm -f /etc/nginx/conf.d/*.conf \
	&& rm -f /etc/nginx/nginx.conf

COPY default.conf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx
COPY start.sh /

CMD ["bash", "/start.sh"]