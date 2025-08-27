import { supabase } from './supabase.js'

// Database table creation functions
export const createTables = async () => {
  try {
    // Create categories table
    const { error: categoriesError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS categories (
          id SERIAL PRIMARY KEY,
          name VARCHAR(50) UNIQUE NOT NULL,
          slug VARCHAR(50) UNIQUE NOT NULL,
          color VARCHAR(20) DEFAULT '#666666',
          created_at TIMESTAMP DEFAULT NOW()
        );
      `
    })

    // Create decades table
    const { error: decadesError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS decades (
          id SERIAL PRIMARY KEY,
          name VARCHAR(20) UNIQUE NOT NULL,
          slug VARCHAR(20) UNIQUE NOT NULL,
          start_year INTEGER NOT NULL,
          end_year INTEGER NOT NULL,
          created_at TIMESTAMP DEFAULT NOW()
        );
      `
    })

    // Create movies table
    const { error: moviesError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE TABLE IF NOT EXISTS movies (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          year INTEGER NOT NULL,
          genre VARCHAR(255),
          rating DECIMAL(3,1),
          duration VARCHAR(20),
          poster_url TEXT,
          backdrop_url TEXT,
          description TEXT,
          director VARCHAR(255),
          cast TEXT[], -- Array of cast members
          category_id INTEGER REFERENCES categories(id),
          decade_id INTEGER REFERENCES decades(id),
          youtube_video_id VARCHAR(50),
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW()
        );
      `
    })

    // Create indexes for better performance
    const { error: indexError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE INDEX IF NOT EXISTS idx_movies_category ON movies(category_id);
        CREATE INDEX IF NOT EXISTS idx_movies_decade ON movies(decade_id);
        CREATE INDEX IF NOT EXISTS idx_movies_year ON movies(year);
        CREATE INDEX IF NOT EXISTS idx_movies_title ON movies(title);
      `
    })

    console.log('Database tables created successfully')
    return { success: true }
  } catch (error) {
    console.error('Error creating tables:', error)
    return { success: false, error }
  }
}

// Insert initial data
export const insertInitialData = async () => {
  try {
    // Insert categories
    const categories = [
      { name: 'Hollywood', slug: 'hollywood', color: '#3B82F6' },
      { name: 'Bollywood', slug: 'bollywood', color: '#EF4444' }
    ]

    for (const category of categories) {
      const { error } = await supabase
        .from('categories')
        .upsert(category, { onConflict: 'slug' })
      
      if (error) console.error('Error inserting category:', error)
    }

    // Insert decades
    const decades = [
      { name: 'Recent', slug: 'recent', start_year: 2020, end_year: 2025 },
      { name: '2000s', slug: '2000s', start_year: 2000, end_year: 2019 },
      { name: '90s', slug: '90s', start_year: 1990, end_year: 1999 },
      { name: '80s', slug: '80s', start_year: 1980, end_year: 1989 }
    ]

    for (const decade of decades) {
      const { error } = await supabase
        .from('decades')
        .upsert(decade, { onConflict: 'slug' })
      
      if (error) console.error('Error inserting decade:', error)
    }

    console.log('Initial data inserted successfully')
    return { success: true }
  } catch (error) {
    console.error('Error inserting initial data:', error)
    return { success: false, error }
  }
}

// Insert movie data
export const insertMovieData = async () => {
  try {
    // Get category and decade IDs
    const { data: categories } = await supabase.from('categories').select('*')
    const { data: decades } = await supabase.from('decades').select('*')

    const hollywoodId = categories.find(c => c.slug === 'hollywood')?.id
    const bollywoodId = categories.find(c => c.slug === 'bollywood')?.id

    const recentId = decades.find(d => d.slug === 'recent')?.id
    const decade2000sId = decades.find(d => d.slug === '2000s')?.id
    const decade90sId = decades.find(d => d.slug === '90s')?.id
    const decade80sId = decades.find(d => d.slug === '80s')?.id

    // Hollywood movies
    const hollywoodMovies = [
      // Recent
      {
        title: "Oppenheimer",
        year: 2023,
        genre: "Biography, Drama, History",
        rating: 8.3,
        duration: "180 min",
        poster_url: "/api/placeholder/300/400",
        description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        director: "Christopher Nolan",
        cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
        category_id: hollywoodId,
        decade_id: recentId
      },
      {
        title: "Top Gun: Maverick",
        year: 2022,
        genre: "Action, Drama",
        rating: 8.2,
        duration: "130 min",
        poster_url: "/api/placeholder/300/400",
        description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator.",
        director: "Joseph Kosinski",
        cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
        category_id: hollywoodId,
        decade_id: recentId
      },
      // 2000s
      {
        title: "Gladiator",
        year: 2000,
        genre: "Action, Drama",
        rating: 8.5,
        duration: "155 min",
        poster_url: "/images/gladiator.jpg",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor.",
        director: "Ridley Scott",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        category_id: hollywoodId,
        decade_id: decade2000sId
      },
      {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action, Crime, Drama",
        rating: 9.0,
        duration: "152 min",
        poster_url: "/images/dark-knight.jpg",
        description: "Batman faces the Joker in this epic superhero thriller.",
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        category_id: hollywoodId,
        decade_id: decade2000sId
      },
      {
        title: "Inception",
        year: 2010,
        genre: "Action, Sci-Fi, Thriller",
        rating: 8.8,
        duration: "148 min",
        poster_url: "/images/inception.jpg",
        description: "A thief who steals corporate secrets through dream-sharing technology.",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
        category_id: hollywoodId,
        decade_id: decade2000sId
      },
      {
        title: "Memento",
        year: 2000,
        genre: "Mystery, Thriller",
        rating: 8.4,
        duration: "113 min",
        poster_url: "/images/memento.jpg",
        description: "A man with short-term memory loss attempts to track down his wife's murderer.",
        director: "Christopher Nolan",
        cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
        category_id: hollywoodId,
        decade_id: decade2000sId
      },
      // 90s
      {
        title: "Forrest Gump",
        year: 1994,
        genre: "Drama, Romance",
        rating: 8.8,
        duration: "142 min",
        poster_url: "/images/forrest-gump.jpg",
        description: "The presidencies of Kennedy and Johnson unfold from the perspective of an Alabama man.",
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        category_id: hollywoodId,
        decade_id: decade90sId
      },
      {
        title: "Jumanji",
        year: 1995,
        genre: "Adventure, Comedy, Family",
        rating: 7.0,
        duration: "104 min",
        poster_url: "/images/jumanji.jpg",
        description: "When two kids find and play a magical board game, they release a man trapped in it.",
        director: "Joe Johnston",
        cast: ["Robin Williams", "Kirsten Dunst", "Bonnie Hunt"],
        category_id: hollywoodId,
        decade_id: decade90sId
      },
      // 80s
      {
        title: "Duel",
        year: 1971,
        genre: "Action, Thriller",
        rating: 7.6,
        duration: "89 min",
        poster_url: "/images/duel.jpg",
        description: "A business commuter is pursued and terrorized by the malevolent driver of a massive tractor-trailer.",
        director: "Steven Spielberg",
        cast: ["Dennis Weaver", "Jacqueline Scott", "Carey Loftin"],
        category_id: hollywoodId,
        decade_id: decade80sId
      }
    ]

    // Bollywood movies
    const bollywoodMovies = [
      {
        title: "Dilwale Dulhania Le Jayenge",
        year: 1995,
        genre: "Romance, Drama",
        rating: 8.1,
        duration: "189 min",
        poster_url: "/images/ddlj.jpg",
        description: "A young man and woman fall in love on a European vacation and must convince their parents to let them marry.",
        director: "Aditya Chopra",
        cast: ["Shah Rukh Khan", "Kajol", "Amrish Puri"],
        category_id: bollywoodId,
        decade_id: decade90sId
      },
      {
        title: "3 Idiots",
        year: 2009,
        genre: "Comedy, Drama",
        rating: 8.4,
        duration: "170 min",
        poster_url: "/images/3-idiots.jpg",
        description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
        director: "Rajkumar Hirani",
        cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi"],
        category_id: bollywoodId,
        decade_id: decade2000sId
      },
      {
        title: "Lagaan",
        year: 2001,
        genre: "Drama, Musical, Sport",
        rating: 8.1,
        duration: "224 min",
        poster_url: "/images/lagaan.jpg",
        description: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
        director: "Ashutosh Gowariker",
        cast: ["Aamir Khan", "Gracy Singh", "Rachel Shelley"],
        category_id: bollywoodId,
        decade_id: decade2000sId
      },
      {
        title: "Pushpa 2",
        year: 2024,
        genre: "Action, Drama",
        rating: 8.0,
        duration: "180 min",
        poster_url: "/images/pushpa-2.jpg",
        description: "Sequel to Pushpa: The Rise, continuing the story of Pushpa Raj.",
        director: "Sukumar",
        cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
        category_id: bollywoodId,
        decade_id: recentId
      }
    ]

    // Insert all movies
    const allMovies = [...hollywoodMovies, ...bollywoodMovies]
    
    for (const movie of allMovies) {
      const { error } = await supabase
        .from('movies')
        .upsert(movie, { onConflict: 'title,year' })
      
      if (error) console.error('Error inserting movie:', movie.title, error)
    }

    console.log('Movie data inserted successfully')
    return { success: true }
  } catch (error) {
    console.error('Error inserting movie data:', error)
    return { success: false, error }
  }
}

// Database service functions
export const getMoviesByCategory = async (categorySlug, decadeSlug = null) => {
  try {
    let query = supabase
      .from('movies')
      .select(`
        *,
        categories(name, slug, color),
        decades(name, slug)
      `)
      .eq('categories.slug', categorySlug)

    if (decadeSlug) {
      query = query.eq('decades.slug', decadeSlug)
    }

    const { data, error } = await query.order('year', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error fetching movies:', error)
    return { data: null, error }
  }
}

export const getAllMovies = async () => {
  try {
    const { data, error } = await supabase
      .from('movies')
      .select(`
        *,
        categories(name, slug, color),
        decades(name, slug)
      `)
      .order('year', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error fetching all movies:', error)
    return { data: null, error }
  }
}

export const searchMovies = async (searchTerm) => {
  try {
    const { data, error } = await supabase
      .from('movies')
      .select(`
        *,
        categories(name, slug, color),
        decades(name, slug)
      `)
      .or(`title.ilike.%${searchTerm}%,director.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`)
      .order('year', { ascending: false })

    if (error) throw error
    return { data, error: null }
  } catch (error) {
    console.error('Error searching movies:', error)
    return { data: null, error }
  }
}

