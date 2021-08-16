FROM nginx:1.21.1

RUN apt-get update \
	&& apt-get install -y curl \
	&& rm -f /etc/nginx/conf.d/*.conf \
	&& rm -f /etc/nginx/nginx.conf

COPY default.conf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx
COPY start.sh /

CMD ["sh", "/start.sh"]