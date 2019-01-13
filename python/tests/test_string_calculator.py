import unittest

from python.src.string_calculator import add


class TestStringCalculator(unittest.TestCase):
    def test_add__when_provided_empty_string__returns_zero(self):
        self.assertAdd(arguments='', expected=0)

    def test_add__when_provided_single_number__returns_sum(self):
        self.assertAdd(arguments='9', expected=9)

    def test_add__when_provided_comma_separated_string__returns_sum(self):
        self.assertAdd(arguments='1,2,3', expected=6)

    def test_add__when_provided_new_line_separated_string__returns_sum(self):
        self.assertAdd(arguments='1\\n2', expected=3)

    def test_add__when_provided_with_new_line_and_comma_delimiter__returns_sum(self):
        self.assertAdd(arguments='1,2,3\\n6', expected=12)

    def test_add_when_provided_a_number_greater_than_one_thousand__excludes_from_sum(self):
        self.assertAdd(arguments='2,1001', expected=2)

    def test_add__when_negative_numbers_provided__throws_exception_with_negative_numbers(self):
        with self.assertRaises(Exception) as context:
            add('-1,2,3,-5')

        expected_message = 'Negatives not allowed: [-1, -5]'

        self.assertTrue(expected_message in str(context.exception))

    def assertAdd(self, arguments, expected):
        return self.assertEqual(add(arguments), expected)
