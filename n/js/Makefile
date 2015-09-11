a001=233168
a004=906609
a008=23514624000
a009=31875000
a010=142913828922
a011=70600674
a013=5537376230
a014=837799
a015=137846528820
a017=21124

X=$(basename $(wildcard *.js))

.PHONY: test $(X)

test: $(X)
	@echo

.ONESHELL:
$(X):
	@test -n "$(a$@)" && (test "$$(node $@.js)" = "$(a$@)" && echo -n '.' || echo "\nIn $@.js: expected=$(a$@), actual=$$(node $@.js)") || true
