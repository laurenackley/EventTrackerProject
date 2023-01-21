package com.skilldistillery.game.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.game.entities.Game;
import com.skilldistillery.game.repositories.GameRepository;
@Service
public class GameServiceImpl implements GameService {
@Autowired
	private GameRepository gameRepo;
	
	@Override
	public List<Game> allGames() {
		
		return gameRepo.findAll();
	}

	@Override
	public Game getGame(int gameId) {
		Optional<Game> getGame = gameRepo.findById(gameId);
		Game game = null;
		if(getGame.isPresent()) {
			game = getGame.get();
		}
		return game;
	}

	@Override
	public Game create(Game gameNew) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Game update(int gameId, Game updateGame) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteById(int gameId) {
		// TODO Auto-generated method stub
		return false;
	}

}
