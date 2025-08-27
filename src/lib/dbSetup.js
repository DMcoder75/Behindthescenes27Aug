import { supabase } from './supabase.js'

// Create database tables using SQL
export const setupDatabase = async () => {
  try {
    console.log('Setting up database tables...')

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

    if (categoriesError) {
      console.error('Error creating categories table:', categoriesError)
    } else {
      console.log('Categories table created successfully')
    }

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

    if (decadesError) {
      console.error('Error creating decades table:', decadesError)
    } else {
      console.log('Decades table created successfully')
    }

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

    if (moviesError) {
      console.error('Error creating movies table:', moviesError)
    } else {
      console.log('Movies table created successfully')
    }

    // Create indexes
    const { error: indexError } = await supabase.rpc('exec_sql', {
      sql: `
        CREATE INDEX IF NOT EXISTS idx_movies_category ON movies(category_id);
        CREATE INDEX IF NOT EXISTS idx_movies_decade ON movies(decade_id);
        CREATE INDEX IF NOT EXISTS idx_movies_year ON movies(year);
        CREATE INDEX IF NOT EXISTS idx_movies_title ON movies(title);
      `
    })

    if (indexError) {
      console.error('Error creating indexes:', indexError)
    } else {
      console.log('Indexes created successfully')
    }

    return { success: true }
  } catch (error) {
    console.error('Database setup failed:', error)
    return { success: false, error }
  }
}

// Insert initial data
export const seedDatabase = async () => {
  try {
    console.log('Seeding database with initial data...')

    // Insert categories
    const categories = [
      { name: 'Hollywood', slug: 'hollywood', color: '#3B82F6' },
      { name: 'Bollywood', slug: 'bollywood', color: '#EF4444' }
    ]

    for (const category of categories) {
      const { error } = await supabase
        .from('categories')
        .upsert(category, { onConflict: 'slug' })
      
      if (error) {
        console.error('Error inserting category:', category.name, error)
      } else {
        console.log('Category inserted:', category.name)
      }
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
      
      if (error) {
        console.error('Error inserting decade:', decade.name, error)
      } else {
        console.log('Decade inserted:', decade.name)
      }
    }

    // Get category and decade IDs for movie insertion
    const { data: categoriesData } = await supabase.from('categories').select('*')
    const { data: decadesData } = await supabase.from('decades').select('*')

    const hollywoodId = categoriesData?.find(c => c.slug === 'hollywood')?.id
    const bollywoodId = categoriesData?.find(c => c.slug === 'bollywood')?.id
    const recentId = decadesData?.find(d => d.slug === 'recent')?.id
    const decade2000sId = decadesData?.find(d => d.slug === '2000s')?.id
    const decade90sId = decadesData?.find(d => d.slug === '90s')?.id
    const decade80sId = decadesData?.find(d => d.slug === '80s')?.id

    console.log('Category IDs:', { hollywoodId, bollywoodId })
    console.log('Decade IDs:', { recentId, decade2000sId, decade90sId, decade80sId })

    // Insert sample movies
    const movies = [
      // Hollywood Recent
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
      // Hollywood 2000s
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
      // Hollywood 90s
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
      // Bollywood 90s
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
      // Bollywood 2000s
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
      }
    ]

    for (const movie of movies) {
      const { error } = await supabase
        .from('movies')
        .upsert(movie, { onConflict: 'title,year' })
      
      if (error) {
        console.error('Error inserting movie:', movie.title, error)
      } else {
        console.log('Movie inserted:', movie.title)
      }
    }

    console.log('Database seeded successfully!')
    return { success: true }
  } catch (error) {
    console.error('Database seeding failed:', error)
    return { success: false, error }
  }
}

// Initialize database (setup + seed)
export const initializeDatabase = async () => {
  console.log('Initializing database...')
  
  const setupResult = await setupDatabase()
  if (!setupResult.success) {
    return setupResult
  }

  const seedResult = await seedDatabase()
  if (!seedResult.success) {
    return seedResult
  }

  console.log('Database initialization completed successfully!')
  return { success: true }
}

