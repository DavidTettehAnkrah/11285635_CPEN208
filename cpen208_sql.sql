CREATE OR REPLACE FUNCTION calculate_outstanding_fees()
RETURNS JSON AS $$
DECLARE
    student RECORD;
    outstanding_fees JSON := '[]'::JSON;
    total_paid int ;
    total_due int := 2000.00; -- Assuming a total fee of 2000 for all students
BEGIN
    FOR student IN SELECT student_id, first_name, last_name FROM student.students LOOP
        SELECT COALESCE(SUM(amount), 0) INTO total_paid FROM fees.payments WHERE student_id = student.student_id;
        outstanding_fees := outstanding_fees || JSON_BUILD_OBJECT(
            'student_id', student.student_id,
            'student_name', student.first_name || ' ' || student.last_name,
            'outstanding_fees', total_due - total_paid
        );
    END LOOP;
    RETURN outstanding_fees;
END;
$$ LANGUAGE plpgsql;