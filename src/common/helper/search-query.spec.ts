import SearchQuery from "./search-query";

describe('author', () => {
    it('1', () => {
        const q = new SearchQuery("foo");
        expect(q.author).toBe("");
    });

    it('2', () => {
        const q = new SearchQuery("foo author:bar");
        expect(q.author).toBe("bar");
    });
});

describe('type', () => {
    it('1', () => {
        const q = new SearchQuery("foo");
        expect(q.type).toBe("");
    });

    it('2', () => {
        const q = new SearchQuery("foo type:comment");
        expect(q.type).toBe("comment");
    });

    it('3', () => {
        const q = new SearchQuery("foo type:post");
        expect(q.type).toBe("post");
    });
});

describe('category', () => {
    it('1', () => {
        const q = new SearchQuery("foo");
        expect(q.category).toBe("");
    });

    it('2', () => {
        const q = new SearchQuery("foo category:hive-125125");
        expect(q.category).toBe("hive-125125");
    });
});

describe('tags', () => {
    it('1', () => {
        const q = new SearchQuery("foo");
        expect(q.tags).toEqual([]);
    });

    it('2', () => {
        const q = new SearchQuery("foo tag:bar,baz,zoo");
        expect(q.tags).toEqual(["bar", "baz", "zoo"]);
    });
});

describe('stripped query', () => {
    it('1', () => {
        const q = new SearchQuery("foo bar  author:baz  type:post category:hive-125125  tag:tag1,tag2  zoo");
        expect(q.baseQuery).toBe("foo bar zoo");
    });
});

describe('rebuild query', () => {
    it('1', () => {
        const q = new SearchQuery("foo bar  author:baz  type:post category:hive-125125 tag:tag1");
        q.author = "bazz"
        q.type = "comment"
        q.category = "photography"
        q.tags = ["tag3", "tag4", "tag5"];

        expect(q.rebuild()).toBe("foo bar author:bazz type:comment category:photography tag:tag3,tag4,tag5");
    });
});
