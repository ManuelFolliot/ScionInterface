<?php

namespace App\Tests;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UserUnitTest extends TestCase
{
    public function testIsTrue(): void
    {
        $user = new User();

        $user->setEmail('true@test.com')
            ->setPassword('password')
            ->setPseudo('Username')
            ->setRoles(['ROLE_USER'])
            ->setAvatar('dragon');
        $this->assertSame($user->getEmail(), 'true@test.com');
        $this->assertSame($user->getPassword(), 'password');
        $this->assertSame($user->getPseudo(), 'Username');
        $this->assertSame($user->getRoles(), ['ROLE_USER']);
        $this->assertSame($user->getAvatar(), 'dragon');
    }

    public function testIsFalse(): void
    {
        $user = new User();
        $user->setEmail('true@test.com')
            ->setPassword('password')
            ->setPseudo('Username')
            ->setRoles(['ROLE_USER'])
            ->setAvatar('dragon');

        $this->assertNotSame($user->getEmail(), 'false@test.com');
        $this->assertNotSame($user->getPassword(), 'false');
        $this->assertNotSame($user->getPseudo(), 'FalseUsername');
        $this->assertNotSame($user->getRoles(), 'ROLE_ADMIN');
        $this->assertNotSame($user->getAvatar(), 'false');
    }
}
