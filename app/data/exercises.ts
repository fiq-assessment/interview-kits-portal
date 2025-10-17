export interface Exercise {
  id: string;
  role: 'Frontend' | 'Backend' | 'Full-Stack';
  level: 'Beginner' | 'Intermediate' | 'Expert';
  title: string;
  description: string;
  tech: string[];
  route: string;
  time: string;
  pagination: string;
  tasks: string[];
  bonus: string[];
  githubRepo: string;
  repoName: string;
}

export const exercises: Exercise[] = [
  {
    id: 'fe-beginner',
    role: 'Frontend',
    level: 'Beginner',
    title: 'Product Catalog',
    description: 'Build a product browsing interface with search, filters, sorting, and pagination. Implement debounced search (300ms delay) and synchronize all filters with URL query parameters for shareability. Users should be able to filter by category, sort by price or creation date, and navigate through paginated results.',
    tech: ['Next.js', 'Redux Toolkit', 'TypeScript', 'Server-side Pagination'],
    route: 'http://localhost:3001',
    time: '90 min',
    pagination: 'Offset',
    githubRepo: 'https://github.com/fiq-assessment/fe-beginner-catalog',
    repoName: 'fe-beginner-catalog',
    tasks: [
      'Implement debounced search (300ms) filtering by name/description',
      'Add category filter dropdown with immediate updates',
      'Implement sort options (price ascending/descending, newest first)',
      'Build offset-based pagination with Previous/Next buttons and page indicators',
      'Create product detail page at /products/[id]',
      'Synchronize all filters to URL query parameters',
      'Display proper loading, empty, and error states'
    ],
    bonus: [
      'Add skeleton loaders for better perceived performance',
      'Write unit test for ProductCard component',
      'Implement "items per page" selector',
      'Add smooth transitions for state changes'
    ]
  },
  {
    id: 'fe-intermediate',
    role: 'Frontend',
    level: 'Intermediate',
    title: 'Issue Tracker',
    description: 'Create an issue tracker with server-side pagination, sorting, debounced search, and inline status editing. The status updates should use optimistic UI updates with proper rollback on failure. The interface should feel responsive and handle errors gracefully with user-friendly messages.',
    tech: ['Next.js', 'Redux Toolkit', 'Optimistic UI', 'Error Handling'],
    route: 'http://localhost:3002',
    time: '90 min',
    pagination: 'Offset',
    githubRepo: 'https://github.com/fiq-assessment/fe-intermediate-issues',
    repoName: 'fe-intermediate-issues',
    tasks: [
      'Implement table view with server-side offset pagination',
      'Add debounced search (300ms) filtering by title/description',
      'Implement sorting by multiple columns (created date, priority, status)',
      'Add inline status editing (dropdown) for each ticket row',
      'Implement optimistic UI updates for status changes',
      'Add rollback mechanism on update errors',
      'Display loading skeleton during initial load and page transitions'
    ],
    bonus: [
      'Add column visibility preferences (stored in localStorage)',
      'Write test for optimistic mutation behavior',
      'Add toast notifications for success/error',
      'Implement bulk status updates'
    ]
  },
  {
    id: 'fe-expert',
    role: 'Frontend',
    level: 'Expert',
    title: 'Virtualized Logs',
    description: 'Build a high-performance log viewer that can handle 10,000+ log entries using virtualization techniques. Implement cursor-based pagination for infinite scroll, prefetch log details on hover for better UX, and document your performance optimizations. This exercise tests your ability to build performant UIs with large datasets.',
    tech: ['react-window', 'Cursor Pagination', 'Performance Optimization', 'Prefetching'],
    route: 'http://localhost:3003',
    time: '90 min',
    pagination: 'Cursor',
    githubRepo: 'https://github.com/fiq-assessment/fe-expert-perf',
    repoName: 'fe-expert-perf',
    tasks: [
      'Implement virtualized list rendering (react-window) for 10k+ items',
      'Build cursor-based pagination with infinite scroll loading',
      'Add prefetch on hover for log details (preload before click)',
      'Display loading indicators during fetch and prefetch',
      'Implement basic filtering (log level: info/warn/error)',
      'Add performance metrics display (render time, items rendered)',
      'Document performance optimizations in code comments'
    ],
    bonus: [
      'Handle ETag/304 responses for caching',
      'Add search with debouncing across large dataset',
      'Implement virtual scrolling with variable row heights',
      'Add memory usage monitoring'
    ]
  },
  {
    id: 'be-beginner',
    role: 'Backend',
    level: 'Beginner',
    title: 'Products CRUD API',
    description: 'Implement a complete CRUD API for product management with proper validation, error handling, pagination, filtering, and sorting. The API should support search by name/description, filtering by category, and sorting by price or creation date. All operations should be properly validated and return appropriate HTTP status codes.',
    tech: ['FastAPI', 'MongoDB', 'Pydantic', 'Database Indexes'],
    route: 'http://localhost:3004',
    time: '90 min',
    pagination: 'Offset',
    githubRepo: 'https://github.com/fiq-assessment/be-beginner-products',
    repoName: 'be-beginner-products',
    tasks: [
      'Implement GET /products with search, category filter, sort, and offset pagination',
      'Implement GET /products/{id} with 404 handling',
      'Implement POST /products with validation (201 on success)',
      'Implement PUT /products/{id} with validation and 404 handling',
      'Implement DELETE /products/{id} with 404 handling',
      'Add MongoDB indexes on category and createdAt fields',
      'Return proper error responses with clear messages'
    ],
    bonus: [
      'Add input sanitization and rate limiting',
      'Implement soft deletes (deletedAt field)',
      'Add comprehensive API documentation',
      'Write integration tests with pytest'
    ]
  },
  {
    id: 'be-intermediate',
    role: 'Backend',
    level: 'Intermediate',
    title: 'Orders & Checkout',
    description: 'Build an orders system with cart management, transactional stock decrement, and idempotent checkout endpoint. The checkout should use idempotency keys to prevent duplicate orders, and stock updates must be atomic using MongoDB transactions. Orders should be retrieved with cursor-based pagination for scalability.',
    tech: ['FastAPI', 'MongoDB Transactions', 'Idempotency', 'Cursor Pagination'],
    route: 'http://localhost:3005',
    time: '90 min',
    pagination: 'Cursor',
    githubRepo: 'https://github.com/fiq-assessment/be-intermediate-orders',
    repoName: 'be-intermediate-orders',
    tasks: [
      'Implement POST /cart/items to add items (use x-user-id header)',
      'Implement DELETE /cart/items/{id} to remove items',
      'Implement POST /checkout with idempotency-key header',
      'Use MongoDB transactions to atomically decrement stock',
      'Store idempotency keys to prevent duplicate order creation',
      'Implement GET /orders with cursor pagination (sorted by createdAt desc)',
      'Add proper indexes on orders (userId, createdAt, idempotencyKey)'
    ],
    bonus: [
      'Implement cart expiration (TTL)',
      'Add order status tracking (pending/confirmed/shipped)',
      'Handle insufficient stock gracefully with clear messages',
      'Add integration tests for transaction rollback'
    ]
  },
  {
    id: 'be-expert',
    role: 'Backend',
    level: 'Expert',
    title: 'RBAC Platform',
    description: 'Create an admin platform with role-based access control (admin/user roles), cached statistics endpoint that invalidates on writes, and optimized queries to avoid N+1 problems. Document your caching strategy and include at least one MongoDB aggregation with explain plan notes.',
    tech: ['FastAPI', 'Redis', 'RBAC', 'MongoDB Aggregation', 'Cache Invalidation'],
    route: 'http://localhost:3006',
    time: '90 min',
    pagination: 'Offset',
    githubRepo: 'https://github.com/fiq-assessment/be-expert-platform',
    repoName: 'be-expert-platform',
    tasks: [
      'Implement user authentication with roles (admin/user) stored in MongoDB',
      'Add RBAC middleware to protect /admin/* routes (admin-only)',
      'Implement /admin/products CRUD (admin-only, full access)',
      'Implement GET /stats/top with Redis caching (top 5 products by revenue)',
      'Invalidate /stats/top cache on product/order writes',
      'Use MongoDB aggregation pipeline to avoid N+1 in /stats/top',
      'Add MongoDB explain plan output as comment in code or README'
    ],
    bonus: [
      'Implement JWT-based authentication',
      'Add rate limiting per role',
      'Implement cache warming strategy',
      'Add performance monitoring/metrics'
    ]
  },
  {
    id: 'fs-beginner',
    role: 'Full-Stack',
    level: 'Beginner',
    title: 'Wellness Journal',
    description: 'Build a wellness journal app where users can log daily entries with mood ratings (1-5 scale), notes, and timestamps. The frontend should display entries in a list with date filtering and show a simple line chart visualizing mood over time. Implement full CRUD operations for journal entries.',
    tech: ['Next.js', 'FastAPI', 'MongoDB', 'SVG Charts', 'Date Filtering'],
    route: 'http://localhost:3007',
    time: '90 min',
    pagination: 'Offset',
    githubRepo: 'https://github.com/fiq-assessment/fs-beginner-journal',
    repoName: 'fs-beginner-journal',
    tasks: [
      'Backend: Implement GET /entries with date range filter (from/to) and pagination',
      'Backend: Implement POST /entries with mood (1-5) and note validation',
      'Backend: Implement DELETE /entries/{id}',
      'Backend: Add MongoDB index on createdAt field',
      'Frontend: Display entries list with date filter UI',
      'Frontend: Create entry form with mood selector (1-5 scale with slider)',
      'Frontend: Simple SVG line chart showing mood trend over time'
    ],
    bonus: [
      'Add edit entry functionality',
      'Implement export entries to JSON',
      'Calculate and display mood statistics (average, trend)',
      'Add dark mode toggle'
    ]
  },
  {
    id: 'fs-intermediate',
    role: 'Full-Stack',
    level: 'Intermediate',
    title: 'Shipments Management',
    description: 'Create a shipments management system with multi-criteria filtering, cursor pagination, inline quantity editing with transactions, and CSV import functionality. The system should handle facilities, shipments, and shipment items with proper data relationships and atomic updates.',
    tech: ['Next.js', 'FastAPI', 'MongoDB Transactions', 'CSV Import', 'File Upload'],
    route: 'http://localhost:3008',
    time: '90 min',
    pagination: 'Cursor',
    githubRepo: 'https://github.com/fiq-assessment/fs-intermediate-shipments',
    repoName: 'fs-intermediate-shipments',
    tasks: [
      'Backend: GET /shipments with filters (status, facilityId, from/to dates, PO) + cursor pagination',
      'Backend: PATCH /shipments/{id}/items for bulk quantity updates (use transactions)',
      'Backend: POST /shipments/import to parse and import CSV file',
      'Backend: Add indexes on facilityId, status, createdAt',
      'Frontend: Shipments table with multi-filter UI',
      'Frontend: Inline edit for item quantities with optimistic updates',
      'Frontend: CSV file upload with parsing feedback and error display'
    ],
    bonus: [
      'Export shipments to CSV',
      'Add shipment status workflow validation',
      'Implement drag-and-drop CSV upload',
      'Add real-time upload progress'
    ]
  },
  {
    id: 'fs-expert',
    role: 'Full-Stack',
    level: 'Expert',
    title: 'Admin Panel',
    description: 'Build a complete admin panel with JWT authentication, role-based access control (admin/editor/viewer roles), product management CRUD, and cached statistics endpoint. Document your caching strategy and auth implementation. Include considerations for security (password hashing, CSRF protection, etc.).',
    tech: ['Next.js', 'FastAPI', 'JWT', 'RBAC', 'Redis', 'bcrypt'],
    route: 'http://localhost:3009',
    time: '90 min',
    pagination: 'Offset',
    githubRepo: 'https://github.com/fiq-assessment/fs-expert-admin',
    repoName: 'fs-expert-admin',
    tasks: [
      'Backend: POST /auth/login with password validation, return JWT token',
      'Backend: GET /me to verify current user from token',
      'Backend: Implement RBAC middleware (admin: full, editor: read+write, viewer: read)',
      'Backend: GET/POST/PUT/DELETE /products with role-gated access',
      'Backend: GET /stats/top with Redis caching, cache invalidation on writes',
      'Frontend: Login page with form validation',
      'Frontend: Protected routes based on user role',
      'Frontend: Products management UI with role-appropriate actions',
      'Frontend: Stats dashboard with cached data indicator'
    ],
    bonus: [
      'JWT tokens with refresh mechanism',
      'Signed report links with expiration',
      'Rate limiting per role',
      'CSRF protection',
      'Audit logging'
    ]
  }
];

