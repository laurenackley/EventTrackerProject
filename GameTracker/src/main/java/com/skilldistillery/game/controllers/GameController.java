package com.skilldistillery.game.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	@PostMapping("games/create")
	public Game createNew(@RequestBody Game game, HttpServletRequest req, HttpServletResponse res) {
		Game newGame = null;
		try {
		newGame= gameService.create(game);
	} catch (Exception e) {
		System.err.println(e);
		}	
		return newGame;
	}
	@PutMapping("games/{id}")
	public Game updateGame(@PathVariable("id") int id, @RequestBody Game game) {
		Game update = null;
		try {
			update = gameService.update(id, game);
		} catch (Exception e) {
			// TODO: handle exception
			System.err.println(e);
		}
		return update;
	}
	
	@DeleteMapping("games/{id}")
	public void deleteGame(@PathVariable("id") int id) {
		gameService.deleteById(id);
	}
	@GetMapping("games/search/{keyword}")
	public List<Game> findByKeyword(@PathVariable("keyword")String keyword){
		return gameService.searchByKeywordInNameOrDescription(keyword);
	}
	@GetMapping("games/search/player/min/{min}")
	public List<Game> findGamesByPlayerMin(@PathVariable("min") int min){
		return gameService.searchByPlayerMin(min);
	}
	
	@GetMapping("games/search/player/max/{max}")
	public List<Game> findGamesByPlayerMax(@PathVariable("max") int max){
		return gameService.searchByPlayerMax(max);
	}
}
