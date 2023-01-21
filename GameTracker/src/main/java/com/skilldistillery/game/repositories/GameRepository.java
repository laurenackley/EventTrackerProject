package com.skilldistillery.game.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.game.entities.Game;

public interface GameRepository extends JpaRepository<Game, Integer> {

}
