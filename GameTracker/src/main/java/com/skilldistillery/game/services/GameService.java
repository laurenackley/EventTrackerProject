package com.skilldistillery.game.services;

import java.util.List;
import java.util.Optional;

import com.skilldistillery.game.entities.Game;

public interface GameService {
	List<Game> allGames();
	Game getGame(int gameId);
	Game create(Game gameNew);
	Game update(int gameId, Game updateGame);
	boolean deleteById(int gameId);
}
