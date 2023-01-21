package com.skilldistillery.game.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.game.entities.Game;
import com.skilldistillery.game.services.GameService;

@RestController
@RequestMapping("api")
public class GameController {

	@Autowired
	private GameService gameService;
	
	@GetMapping("games")
	public List<Game> listAllGames(){
		return gameService.allGames();
	}
	
	@GetMapping("games/{id}")
	public Game findById(@PathVariable("id")int id) {
		return gameService.getGame(id);
	}
	
}
