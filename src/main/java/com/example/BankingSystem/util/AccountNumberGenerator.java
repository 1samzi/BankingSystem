package com.example.BankingSystem.util;

// Generates a display account number from the database id,
// then appends a Luhn check digit to help catch simple typing errors.
// https://en.wikipedia.org/wiki/Luhn_algorithm

public final class AccountNumberGenerator {
    private static final long MODULUS = 1_000_000_000L;
    private static final long MULTIPLIER = 387_420_489L;
    private static final long OFFSET = 104_729L;

    private AccountNumberGenerator() {
    }

    public static String generate(Long accountId) {
        if (accountId == null) {
            return "";
        }

        long body = Math.floorMod((accountId * MULTIPLIER) + OFFSET, MODULUS);
        String bodyText = String.format("%09d", body);
        return bodyText + calculateLuhnCheckDigit(bodyText);
    }

    private static int calculateLuhnCheckDigit(String bodyText) {
        int sum = 0;
        boolean doubleDigit = true;

        for (int index = bodyText.length() - 1; index >= 0; index--) {
            int digit = bodyText.charAt(index) - '0';

            if (doubleDigit) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            doubleDigit = !doubleDigit;
        }

        return (10 - (sum % 10)) % 10;
    }
}
