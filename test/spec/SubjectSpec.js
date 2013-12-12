describe("Subject tests", function () {
	it("should be able to be created", function () {
		var subject = new svc.Subject();
		expect(true).toBe(true); // we got here
		expect(subject._notificationToObservers).toEqual({});
	});

	it("should be equal to itself", function () {
		var subject = new svc.Subject();
		expect(subject.isEqual(subject)).toBe(true);
	});

	it("should notify that it is going to destroy itself", function () {

	});
});
