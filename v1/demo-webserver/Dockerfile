FROM nginx:1.11.7

RUN rm -f /etc/nginx/conf.d/*.conf \
	&& rm -f /etc/nginx/nginx.conf

COPY default.conf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx
COPY start.sh /

CMD ["bash", "/start.sh"]