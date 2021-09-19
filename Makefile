start:
	docker-compose up -d
stop:
	docker-compose down -v --remove-orphans
restart: stop start
